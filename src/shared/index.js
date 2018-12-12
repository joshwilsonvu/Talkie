

const textLimit = 140;

const validate = (input, rules) => {
  // Execute a set of tests and if invalid, return an error message
  const rule = rules.find(rule => !rule.test(input));
  return rule ? rule.msg : undefined;
};

export const validatePost = text => {
  return validate(text, [
    { test: x => x.length > 0, msg: "Your post should have some content."},
    { test: x => x.length <= textLimit, msg: `Your post shouldn't be longer than ${textLimit} characters.`}
  ]);
};

