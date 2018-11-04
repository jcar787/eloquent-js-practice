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

  [Symbol.iterator]() {
    let step = -1;
    const that = this;
    const iterator = {
      next() {
        step++;
        if (step === that.set.length) {
          return { done: true, value: undefined };
        } else {
          return { done: false, value: that.set[step] };
        }
      }
    };
    return iterator;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
//group.delete(10);
console.log(group.has(10));

for (const el of group) {
  console.log(el);
}
