class Group {
  constructor(arr = []) {
    this.set = arr;
  }

  static from(arr) {
    return new Group(arr);
  }

  add(element) {
    const found = this.has(element);
    if (!found) {
      this.set = [...this.set, ...element];
    }
  }

  delete(element) {
    this.set = this.set.filter(el => el !== element);
  }

  has(element) {
    const found = this.set.find(el => el === element);
    if (found) {
      return true;
    }
    return false;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
