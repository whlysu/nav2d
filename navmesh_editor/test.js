var studs={
    books:{
        math:{
            score:90
        },
        en:{
            score:80
        },
        zh:{
            score:70
        }
    }
}
for (const { score: next } of Object.values(studs.books)) {
    console.log(next);
}