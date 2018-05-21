export const ItemObjectCreator = (type, value, key, subkey, taskkey) => {
	switch(type) {
			case "goal":
					return {
						key,
						completedIndex: null,
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
						completedIndex: null,
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
						completedIndex: null,
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