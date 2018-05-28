export const ItemObjectCreator = (type, value, key, subkey, taskkey) => {
	switch(type) {
			case "goal":
					return {
						key,
						value,
						isOpen: false,
						isComplete: false,
						modalVisible: false,
						transitionActive: false,
					}
					break;
			case "subgoal":
					return {
						key,
						subkey,
						value,
						isOpen: false,
						isComplete: false,
						modalVisible: false,
						transitionActive: false,
					}
					break;
			case "task":
					return {
						key,
						subkey,
						taskkey,
						value,
						isOpen: false,
						isComplete: false,
						modalVisible: false,
						transitionActive: false,
					}
					break;
			default: 
					return;
	}
}