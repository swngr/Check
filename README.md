# Automation UI Testing

## Local installation

1. Clone this repo into your workspace

   ```
   cd ~/workspace
   git clone git@git.internal.tl.io:qa/automation-ui-testing.git
   ```

   > If you see ssh key error follow <a href="https://tlretail.visualstudio.com/Tlp/_wiki/wikis/Tlp.wiki/863/Tlp-Quick-Start"> this Document</a>

2. Install [Homebrew](https://brew.sh/) if it's not already installed.

3. Install node, and jq using homebrew:

   ```
   brew install node
   ```

4. Install npm package dependencies

   ```
   cd ~/workspace/automation-ui-testing
   npm install
   ```

## Local usage with simulators

Open new terminal window and go to automation-ui-testing folder `cd ~/workspace/automation-ui-testing` and create a simulator using following command:

`xcrun simctl create "iPad Air (4th generation)-test" "iPad Air (4th generation)" "com.apple.CoreSimulator.SimRuntime.iOS-15-2"`

**NOTE:** Do not create test simulator again if once created. Some helpful commands:

- To List All Simulators: `xcrun simctl list`
- To Delete: `xcrun simctl delete <UIUD>`
- To ShutDown all simulators: `xcrun simctl shutdown all || true`
- To erase All Simulators: `xcrun simctl erase all || true`

**if you see error like**: `xcrun: error: unable to find utility "simctl", not a developer tool or in PATH`

Make sure `Xcode` is installed.

Secondly make sure `Command Line Tools` is installed. To do so follow these steps:

1. Go to Xcode > Preferences
2. Click on Locations
3. Check `Command Line Tools` field is not empty, if empty make sure its matching with Xcode version.

You will get a UIUD for simulator using that ID boot the simulator
`xcrun simctl boot <UIUD>`

Now create a file named `.env` and set it's variables according to `.env.example`

To run all the ios tests with: `npm run ios.local`
To run a specific set of ios tests with a tag use: `npm run ios.local -- --cucumberOpts.tagExpression='@APP_TAG_HERE'`
To run the web tests use: `npm run web.local`

## Remote usage on SauceLabs

1. Create an account on SauceLabs (contact QA to receive invite).
2. Grab your Username and Access Key(found on your user settings or the Key Button at the top bar).
3. Export your credentials in your `.env` file:

   ```
   export SAUCE_USERNAME="<username_goes_here>"
   export SAUCE_ACCESS_KEY="<access_key_goes_here>"

   ```

4. If you are going to run the mobile tests, adjust your `.env` according to the lines for Real Device or Simulators for SauceLabs on `.env.example`

5. Run the tests:
   - To run the ios tests use: `npm run ios.sauce.us`
   - To run the web tests use: `npm run web.sauce.us`
