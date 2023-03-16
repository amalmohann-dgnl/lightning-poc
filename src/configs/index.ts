/**
 * Importing all the configs to a single file
*/
import theme from './theme';
import urls from './endpoint-url';
import railName from './rail-name';
import routes from './routes';
// import keyboardConfig from './keyboard';

/**
 * Exporting all the configs from a single location
*/
export {
    theme,
    railName,
    routes,
    urls as endpoint,
    // keyboardConfig
};