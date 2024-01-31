const delay = (ms: number) => new Promise((resolve, reject) => setTimeout(resolve, ms));

const mainAsync = async () => {
    await delay(1000);
    console.log('1s');
    await delay(1000);
    console.log('2s');
    await delay(1000);
    console.log('3s');
}

mainAsync()