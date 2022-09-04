/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (config) => {
	// Remove the ModuleScopePlugin which throws when we try to import something
	// outside of src/.
	config.resolve.plugins.pop();

	// Resolve the path aliases.
	config.resolve.plugins.push(new TsconfigPathsPlugin());

	// Let Babel compile outside of src/.
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	const oneOfRule = config.module.rules.find((rule) => rule.oneOf);
	const tsRule = oneOfRule.oneOf.find((rule) =>
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		rule.test.toString().includes("ts|tsx")
	);
	tsRule.include = undefined;
	tsRule.exclude = /node_modules/;

	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return config;
};
