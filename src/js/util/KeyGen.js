export const KeyGen = (type, arr) => {
    
    let keyList = [];
    switch(type) {
        case "goal":
            keyList = arr.filter(goal => goal.key);
            break;
        case "subgoal":
            keyList = arr.filter(subgoal => subgoal.subkey);
            break;
        case "task":
            keyList = arr.filter(task => task.taskkey);
            break;
    }

    let text = '';
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const generator = () => {
        for (let i = 0; i < 8; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
    }

    let key = generator();
    while (keyList.includes(key)) {
        key = generator();
    }

    return key;
}