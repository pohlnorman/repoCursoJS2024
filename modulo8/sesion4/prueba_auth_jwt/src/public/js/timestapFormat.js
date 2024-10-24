const timestampFormat = (fecha) => {
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth()+ 1).padStart(2,'0');
    const day = String(fecha.getDate()+ 1).padStart(2,'0');

    const hour = String(fecha.getHours()+ 1).padStart(2,'0');
    const minute = String(fecha.getMinutes()+ 1).padStart(2,'0');
    const second = String(fecha.getSeconds()+ 1).padStart(2,'0');

    return `${year}${month}${day}_${hour}${minute}${second}`;
}

export default timestampFormat;