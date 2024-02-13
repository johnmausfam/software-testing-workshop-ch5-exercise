function union_set(a, b) {
    let result = new Set(a || []);
    b?.forEach(function (bItem) {
        if (!result.has(bItem)) result.add(bItem);
    });
    return result;
}

module.exports = { union_set };
