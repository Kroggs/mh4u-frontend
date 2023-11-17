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
    },
    login : {
        success: (appName?: string): string => `Bienvenue ${appName ? `sur ${appName}` : ''}!`,
        error: {
            general: "Nous n'avons pas réussi à vous identifier...",
            invalid: "email et/ou et mot de passe incorrect(s).",
            inactive: "L'email et/ou le mot de passe sont incorrects ou le compte associé est inactif (vérifiez vos mails pour l'activer).",
            server: "Votre compte a été activé mais vos informations n'ont pas pu être sauvegardées...",
        }
    }
}