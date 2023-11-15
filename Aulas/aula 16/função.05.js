// recursividade

function u (n) {
    if (n == 1 ) {
        return 1
    } else {
        return n * u(n-1)
    }
}

console.log (u(6))

/*var m = 6
if (m == 1 ) {
    console.log (1)
} else {
      m = m * (m--)
      console.log (m)
}*/
