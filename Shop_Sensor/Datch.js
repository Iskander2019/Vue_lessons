function dat(name, type, interface, P, image) {
 //   return {name:name, type:type, interface, P, image
    return {name:name, type:type, interrface:interface, P:P, image:image
    }
}

const datchiki = [
dat("DGG-14", "Гор газ", "RS-485", "0.8W", "../../Images/DGG.jpg"),
dat("DUG-14", "Гор газ", "RS-485", "0.8W", "../../Images/DUG.jpg"),
dat("DP-14", "Гор газ", "RS-485", "0.8W", "../../Images/DP.jpg")
]

new Vue({
    el : "#Contner",
    data : {
        datch: datchiki,
        out2 : "6666666666"
    }    
})

new Vue({
    el:"#ttt",
    data : {
        out1:"444444jkgh44"
    }

})

