/* eslint-disable no-useless-escape */
export const regexTextFrom0To50 = /^([A-Za-z\-' àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸ0123456789]{0,50})$/;

export const regexTextFrom2To50 = /^([A-Za-z\-' àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸ0123456789]{2,50})$/;

export const regexName = /^([A-Za-z\-' àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸ]{2,50})$/;

export const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

export const regexFirstName = regexName;

export const regexInput = regexTextFrom2To50;

export const regexLastName = regexName;

export const regexPassword = /(?=^.{8,32}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{';'?>.<,])(?!.*\s).*$/;

export const regexPhoneNumber = /^((?:\+|00)[17](?: |\-|\.)?|(?:\+|00)[1-9]\d{0,2}(?: |\-|\.)?|(?:\+|00)1\-|\.\d{3}(?: |\-|\.)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-|\.)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-|\.)[0-9]{3}(?: |\-|\.)[0-9]{4})|([0-9]{7}))$/;

export const regexTitle = regexTextFrom0To50;