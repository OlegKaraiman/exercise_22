const films = [
    {
        category: 'comedy',
        title: 'Назад в будующее',
        year: '1985',
    },
    {
        category: 'comedy',
        title: 'Назвд в будующее 2',
        year: '1986',
    },
    {
        category: 'comedy',
        title: 'Один дома',
        year: '1987',
    },
    {
        category: 'comedy',
        title: 'Один дома 2',
        year: '1988',
    },
    {
        category: 'drama',
        title: 'Форест Гамп',
        year: '1987',
    },
    {
        category: 'drama',
        title: 'Побег из шоушенка',
        year: '1987',
    },
    {
        category: 'drama',
        title: 'Список Шиндлера',
        year: '1998',
    },
    {
        category: 'drama',
        title: 'Титаник',
        year: '1997',
    },
    {
        category: 'drama',
        title: 'Зеленая миля',
        year: '1997',
    },
    {
        category: 'criminal',
        title: 'Крансеый дракон',
        year: '1997',
    },
    {
        category: 'criminal',
        title: 'Молчание ягнят',
        year: '1994',
    },
    {
        category: 'criminal',
        title: 'Крестный отец',
        year: '1974',
    },
    {
        category: 'criminal',
        title: 'Отступники',
        year: '2005',
    },
    {
        category: 'criminal',
        title: 'Лицо со шрамом',
        year: '1971',
    },
    {
        category: 'criminal',
        title: 'Криминальное чтиво',
        year: '1995',
    },
    {
        category: 'action',
        title: 'Матрица',
        year: '1997',
    },
    {
        category: 'action',
        title: 'Аватар',
        year: '2008',
    },
    {
        category: 'action',
        title: 'Начало',
        year: '2009',
    },
    {
        category: 'action',
        title: 'Терминатор',
        year: '1978',
    },
    {
        category: 'action',
        title: 'Леон',
        year: '1995',
    },
    {
        category: 'action',
        title: 'Семь',
        year: '1997',
    },
    {
        category: 'action',
        title: 'Чужой',
        year: '1979',
    },
];

//----------
function convertArrayToObject(objectArray) {
    return objectArray.reduce((res, item) => {
        const key = item['category'];
        const value = [item['title'], item['year']];
        if (!res[key]) {
            res[key] = [];
        }
        res[key].push(value);
        return res;
    }, {});
}

const objFilms = convertArrayToObject(films);
//console.log(objFilms);

//----------
objFilms[Symbol.iterator] = function () {
    const categories = Object.values(objFilms);
    //console.log(categories);

    let index = 0;
    let indexCategories = 0;

    return { next() {
        if (index === categories[indexCategories].length) {
            indexCategories++;
            index = '0';
        }

        if (indexCategories === categories.length) {
            return { done: true };
        } else {
            return {
                done: false,
                value: categories[indexCategories][index++],
            };
        }
    },
    };
};

// eslint-disable-next-line no-unused-vars
for (const film of objFilms) {
    //console.log(film);
}

//----------
objFilms[Symbol.iterator] = function () {
    const properties = Object.keys(this);
    let count = 0;
    let isDone = false;

    const next = () => {
        if (count >= properties.length) {
            isDone = true;
        }
        return { done: isDone, value: this[properties[count++]] };
    };
    return { next };
};


// eslint-disable-next-line no-unused-vars
for (let property of objFilms) {
    //console.log(`Properties -> ${property}`);
}
