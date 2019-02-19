module.exports = {
	"extends": "airbnb",
	"env": {
		"browser": true,
		"commonjs": true,
		"node": true,
		"jest": true,
	},
	"rules": {
		"indent": [
			"error",
			"tab",
		],
		"react/jsx-indent": [
			"error",
			"tab",
		],
		"react/jsx-indent-props": [
			"error",
			"tab",
		],
		"react/jsx-one-expression-per-line": "off",
		"no-tabs": "off",
		"quotes": [
			"error",
			"single",
			{
				"allowTemplateLiterals": true,
			},
		],
	}
}
