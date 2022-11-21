const test = {
    prop: 42,
    func: function() {
        // setTimeout(function() {
            console.log(this.prop)
        // }, 1000)
    },
  };

test.func()

//la función .bind() conserva el objeto this