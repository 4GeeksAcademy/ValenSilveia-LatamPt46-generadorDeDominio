let pronoun = ['the', 'our', 'your', 'my'];
let adj = ['great', 'big', 'small', 'amazing'];
let noun = ['jogger', 'racoon', 'developer', 'artist'];

for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      console.log(`${p}${a}${n}.com`);
      console.log(`${p}${a}${n}.net`);
      console.log(`${p}${a}${n}.us`);
      console.log(`${p}${a}${n}.io`);
    }
  }
}
     