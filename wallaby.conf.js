module.exports = function (wallaby) {
    return {
      files: [
        'src/**/*.ts',
        'src/**/*.js'
      ],
  
      tests: [
        'test/**/*Spec.js'
      ],
      runAllTestsWhenNoAffectedTests: true,
   
      // for node.js tests you need to set env property as well
      // https://wallabyjs.com/docs/integration/node.html
    };
  };