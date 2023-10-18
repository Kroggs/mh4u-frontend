export const messages = {
    form : {
        error : {
            requiredFields: (fields?: string[]) : string => {
                if(!fields) return 'Tous les champs sont obligatoires.';
                const plural = fields.length > 1;
                return `Le${plural ? 's' : ''} champ${plural ? 's' : ''} ${fields.join(' et ')} ${
                    plural ? 'sont' : 'est'
                } obligatoire${plural ? 's' : ''}.`;
            },
            invalid: (field?: string, acceptedFormat?: string): string => {
                if(!field) return 'Les données indiquées ne correspondent pas aux formats acceptés.';
                return `Le champ ${field} ne respecte pas le bon format${!acceptedFormat ? '.' : `(${acceptedFormat}).`}`;
            }
        }
    }
}