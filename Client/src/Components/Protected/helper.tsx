export const parseJwt = (token:string) => {
    try {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
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


