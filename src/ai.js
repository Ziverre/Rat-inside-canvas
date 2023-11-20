class Goal {
    static goals = [];
    static sortList(spr){
        spr.goals.sort((b,a)=>{
            return a.getScore(spr) - b.getScore(spr);
        });
    }
    static getClone(){ // Since Jacascript reference the original object when assigned to a new variable, we have to explicitly copy the content of the og Object to the new variable in order to prevent issues associated with.
        let arr = [];
        Goal.goals.forEach(a=>{
            arr.push(a);
        });
        return arr;
    }
}

Goal.goals.push({
    getName(){
        return "Get Cheese";
    },
    getScore(spr){
        return 100 - spr.fullness + spr.energy;
    },
    isSatisfied(spr){
        return spr.grabbed instanceof CheeseSprite;
    }
});

Goal.goals.push({
    getName(){
        return "Sleep";
    },
    getScore(spr){
        return 100 - spr.energy + spr.fullness;
    },
    isSatisfied(spr){
        return spr.energy = 100;
    }
});
 
class Plan {
    //Plan's goal is to fetch a list of actions suitable for the current goal in order to satisfy
    static a;
}

class Action {
}

class MouseAction extends Action {}

Action.prototype.list = [];

Action.prototype.list.findClosestCheese = {
}

Action.prototype.list.moveToTarget = {
    
}
