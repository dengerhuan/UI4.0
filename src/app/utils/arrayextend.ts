export class ArrayExtend {
  public static avg(list) {
    if (list instanceof Array && list.length > 0) {

      const result = this.sum(list);
      const size = list.length;
      return result.map(item => item / size);

    }
  }

  public static sum(list) {
    if (list instanceof Array && list.length > 0) {
      const result = new Array(list[0].length).fill(0);
      list.forEach(item => {
        item.forEach((va, j) => {
          result[j] += va;
        });
      });
      return result;
    }
  }
}
