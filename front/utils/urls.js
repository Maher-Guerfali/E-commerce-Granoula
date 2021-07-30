export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_live_44228656196D8800'

export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_51IoY3jFRKlIWaZmz330QId2ePIxI1a5NqbnW75iPD3JyH3FbIxsR6tmy3BsmSGRVigQOZiIVuDGAmcQ8bPFNi3xy00ygpktoaQ'

/**
 * Given a image object return the proper path to display it
 * Provides a default as well
 * @param {any} image 
 */
export const fromImageToUrl = (image) => {
    if (!image) {
      return "/GraF.png"; //Or default image here
    }
    if (image.url.indexOf("/") === 0) {
      //It's a relative url, add API URL
      return `${API_URL}${image.url}`;
    }
  
    return image.url;
};