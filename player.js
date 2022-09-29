class Player{
    constructor(){
        this.name = null
        this.posx = 0
        this.posy = 300
        this.idx = null
        this.score = 0
    }
    getCount(){
        db.ref("playercount").on("value", function(data){
            playercount = data.val()
        })
    }
    addPlayer(){
        if (this.idx===1){
            this.posx = 150
        } else{
            this.posx = 650
        }
        db.ref("player"+this.idx).set({
            name: this.name,
            posx: this.posx,
            posy: this.posy,
            idx: this.idx,
            score: this.score
        })
    }
    
    updateCount(num){
        db.ref("/").update({
          playercount:num
        })
      }

    getp1(){
        db.ref("player1").on("value", function(data){
            posx1 = data.val().posx
            posy1 = data.val().posy
            idx1 = data.val().idx
        })
        
    }
    getp2(){
        db.ref("player2").on("value", function(data){
            posx2 = data.val().posx
            posy2 = data.val().posy
            idx2 = data.val().idx
        })
        
    }
    updatep1(num){
        db.ref("player1").update({
            posy: num
        })
    }
    
    updatep2(num){
        db.ref("player2").update({
            posy: num
        })
    }

    static getPlayersInfo(){
        db.ref("/").on("value",data=>{
        players = data.val()
          p1info = data.val().player1
          p2info = data.val().player2
        })
      }
}