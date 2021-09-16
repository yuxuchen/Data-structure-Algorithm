  //String reverse.
  //Convert string to array first.
  //exp: Hi Iris -- sirI iH
  function reverse(str){
    //check input
if (!str || str.length <2 || typeof str !== 'string'){
    return "You don't need to do the reverse thing.";
}
        var str_a = str.split('');
        const l = str_a.length;
        for( let i = 0; i < l/2 ; i ++){
            var mid = new String();
            mid = str_a[l-i-1];
            str_a[l-i-1] = str_a[i];
            str_a[i] = mid;
        }
        str_a = str_a.join("")
        return str_a;
      }
    
      function reverse2(str){
          return str.split('').reverse().join('')
      }

      const reverse3 = str => [...str].reverse().join('')
    res = reverse('a');
    console.log(res)