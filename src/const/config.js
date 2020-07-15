// export const LOCAL_IP = "192.168.43.216";
export const LOCAL_IP = "localhost";
export const PORT = 5000;

const DEV_PATH = `http://${LOCAL_IP}:${PORT}`;
const PROD_PATH = `https://cheq-home-assignment.herokuapp.com`;
export const vastServiceUrl = DEV_PATH + "/v1/vasts";
