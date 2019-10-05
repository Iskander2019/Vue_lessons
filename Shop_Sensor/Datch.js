function dat(name, type, interface, P, image) {

   return {name:name, type:type, interface:interface, P:P, image:image
   }
}



const datchiki = [
dat("DGG-14", "Гор газ", "RS-485", "0.8W", "../../Images/DA-14.jpg"),
dat("DUG-14", "Угарный газ", "RS-485", "1,2W", "../../Images/DUG-14.jpg"),
dat("DP-14", "Пропан", "RS-485", "1,6W", "../../Images/DM-14.jpg")
]

new Vue({
    el : "#Contner",
    data : {
        datch: datchiki,
        out2 : "0000000000",
        dat1 : datchiki[0],
        selectedDatIndex:0
    },
    methods: {
        selectDat: function(index){
            console.log("CLICK", index);
            this.dat1=datchiki[index],
            this.selectedDatIndex=index
        }
    }    
})

new Vue({
    el:"#ttt",
    data : {
        out1:"444444jkgh44"
    }

})

