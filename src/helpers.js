export const isContainer = (breakpoint) => {
    switch (breakpoint) {
        case 'sm':
            return 'container-sm';
        case 'md':
            return 'container-md';
        case 'lg':
            return 'container-lg';
        case 'xl':
            return 'container-xl';
        case 'fluid':
            return 'container-fluid';
        default:
            return 'container';
    }
};

export const isLength = (items) => {
    return items.length ? items : 'Упс! У нас нет таких товаров, попробуйте изменить условия поиска.';
};
