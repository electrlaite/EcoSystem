export const getVariationClass = (variation) => {
    if (variation > 5) {
        return "bg-emerald-500"; // Vert pour plus de 5%
    } else if (variation < -5) {
        return "bg-red-500"; // Rouge pour moins de -5%
    } else {
        return "bg-slate-400"; // Gris pour entre -5% et 5%
    }
};