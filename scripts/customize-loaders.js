module.exports = function (rules) {
  const loadersRule = rules.find(rule => !!rule.oneOf);
  if (!loadersRule) {
    throw new Error('Initial config does not contain module.rules item with oneOf')
  }

  declareVariablesScssLoaderRule(loadersRule.oneOf)
};

function declareVariablesScssLoaderRule(rules) {
  const cssRuleIndex = rules.findIndex(rule => rule.test.source === '\\.css$');
  if (cssRuleIndex === -1) {
    throw new Error('Initial config does not contain module.rule for .css')
  }

  const variablesRule = {
    test: /\.variables\.scss/,
    use: [
      {
        loader: require.resolve('sass-all-variable-loader'),
        options: {
          camelCase: true,
        },
      },
    ],
  };

  rules.splice(cssRuleIndex, 0, variablesRule);
}
