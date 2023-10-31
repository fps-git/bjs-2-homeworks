//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [{}, {}, {}, {}, {}];
    return function(...args) {
        const hash = md5(args);
        let foundInCache = cache.find(cache => cache.hash === hash);
        if (!!foundInCache) {
            return "Из кэша: " + foundInCache.result;
        }
        const result = func(...args);
        cache.shift();
        let newCacheObj = {};
        newCacheObj.hash = hash;
        newCacheObj.result = result;
        cache.push(newCacheObj);
        return "Вычисляем: " + result;
    }
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.allCount = 0;
    wrapper.count = 0;
    function wrapper(...args) {
        wrapper.allCount++;

        if (!timeoutId) {
            func(...args);
            wrapper.count++;
        }

        clearTimeout(timeoutId); 
        timeoutId = setTimeout(() => {
            wrapper.count++;
            func(...args);
        }, delay)  
    }
    return wrapper;
}