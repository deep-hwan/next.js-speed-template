#!/usr/bin/env node

const execSync = require('child_process').execSync;
const path = require('path');
const fs = require('fs');

// Get the project name from the user input
const projectName = process.argv[2];
if (!projectName) {
  console.error('Please provide a project name:');
  console.error('npx create-next-app-template my-app');
  process.exit(1);
}

const projectPath = path.resolve(process.cwd(), projectName);

if (fs.existsSync(projectPath)) {
  console.error(`Project "${projectName}" already exists in the current directory.`);
  process.exit(1);
}

try {
  // Clone the template repository
  console.log('Cloning the template...');
  execSync(`git clone https://github.com/deep-hwan/Next-Ts-template.git ${projectName}`, { stdio: 'inherit' });

  // Change directory to the new project
  process.chdir(projectPath);

  // Remove Git history from the cloned template
  execSync('rm -rf .git', { stdio: 'inherit' });

  // Remove bin folder and document folders from the new project
  console.log('Removing unnecessary files...');
  execSync('rm -rf bin', { stdio: 'inherit' });
  execSync('rm -rf docs document documents documentation', { stdio: 'inherit' });

  // Modify package.json to set version to 1.0.0
  const packageJsonPath = path.join(projectPath, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  packageJson.version = '1.0.0'; // Set the version to 1.0.0

  // Remove bin configuration from package.json
  delete packageJson.bin;

  // Remove Yarn PnP related configs if present
  delete packageJson.packageManager;

  // Ensure npm compatibility
  if (packageJson.engines && packageJson.engines.yarn) {
    delete packageJson.engines.yarn;
  }

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  // Initialize npm instead of yarn
  console.log('Initializing npm environment...');
  execSync('npm pkg set packageManager="npm@10.8.3"', { stdio: 'inherit' });

  // Install dependencies using npm
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  console.log('Setup complete! Now you can start your project by running:');
  console.log(`cd ${projectName}`);
  console.log('npm run dev');
} catch (error) {
  console.error('An error occurred during setup:', error);
}
