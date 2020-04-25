export const IsStringColor = str => {
    str = str.toString();
    return (
        str.startsWith('rgb') || str.startsWith('rgba') || str.startsWith('#')
    );
};
