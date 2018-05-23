export const ItemObjectCreator = (type, value, key, subkey, taskkey) => {
	switch(type) {
			case "goal":
					return {
						key,
						value,
						isOpen: false,
						isComplete: false,
						modalVisible: false,
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
					}
					break;
			default: 
					return;
	}
}