import jwt_decode from "jwt-decode";


export const parseJwt = (token:string) => {
    try {
        return jwt_decode(token)
    } catch (e) {
      return null;
    }
  };

export const isValidToken = (token: string | undefined): boolean => {
    if(token == null || token == undefined){
        return false;
    }
    const decodedToken: any = parseJwt(token)
    return  decodedToken?.exp * 1000 > Date.now();
}

export const getIdFromToken = (token: string | undefined): number => {
    if(token == null || token == undefined){
        return -1;
    }
    const decodedToken: any = parseJwt(token)
    return decodedToken?.id? decodedToken.id: -1;
    
}

export const getRoleFromToken = (token: string | undefined): number => {
    if(token == null || token == undefined){
        return -1;
    }
    const decodedToken: any = parseJwt(token)
    return decodedToken?.primary_profile? decodedToken.primary_profile: -1;
    
}

export const getUserNameFromToken = (token: string | undefined): string => {
    if(token == null || token == undefined){
        return "";
    }
    const decodedToken: any = parseJwt(token)
    return decodedToken?.name? decodedToken.name: "";
    
}

export const getEmailFromToken = (token: string | undefined): string => {
    if(token == null || token == undefined){
        return "";
    }
    const decodedToken: any = parseJwt(token)
    return decodedToken?.email? decodedToken.email: "";
    
}


export const getIdFromHeader = (authHeader: string | undefined): number => {
    const token = authHeader && authHeader.split(" ")[1];
    return getIdFromToken(token);
}

export const getRoleFromHeader = (authHeader: string | undefined): number => {
    const token = authHeader && authHeader.split(" ")[1];
    return getRoleFromToken(token);
}

export const getEmailFromHeader = (authHeader: string | undefined): string => {
    const token = authHeader && authHeader.split(" ")[1];
    return getEmailFromToken(token);
}

export const getNameFromHeader = (authHeader: string | undefined): string => {
    const token = authHeader && authHeader.split(" ")[1];
    return getUserNameFromToken(token);
}

