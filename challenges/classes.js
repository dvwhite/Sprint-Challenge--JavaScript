// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakerRefactored {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    // Methods
    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

// Test object
const cuboidRefactored = new CuboidMakerRefactored(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidRefactored.volume()); // 100
console.log(cuboidRefactored.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMakerRefactored {
    constructor(side) {
        super(side, side, side);
    }

    volume() {
        return Math.pow(this.length, 3);
    }

    surfaceArea() {
        return 6 * Math.pow(this.length, 2);
    }
}

// Test object
const cube = new CubeMaker(5);

// Test console logs
// Verified by googling "cube calc: find V, edge=5", and "cube calc: find A, edge=5" where 'Edge' has a value of 5
console.log(cube.volume()); // 125
console.log(cube.surfaceArea()); // 150