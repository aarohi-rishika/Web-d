let food = {x:4, y:16};

const updateFood = () => {
    if(onSnake(food)) {
        growSnake();
        food = getNewFoodPosition();
    }
}