function convertTemperature() {
    const temperature = document.getElementById('temperature').value;
    const scale = document.getElementById('scale').value;
    const result = document.getElementById('converted');
    const formulaText = document.getElementById('formula-text');
    const convertedScale = document.getElementById('converted-scale');

    if (scale === 'CtoF') {
        const fahrenheit = (temperature * 9/5) + 32;
        result.value = fahrenheit.toFixed(2);
        convertedScale.textContent = 'Fahrenheit';
        formulaText.textContent = `Formula: (${temperature}°C × 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    } else {
        const celsius = (temperature - 32) * 5/9;
        result.value = celsius.toFixed(2);
        convertedScale.textContent = 'Celsius';
        formulaText.textContent = `Formula: (${temperature}°F - 32) × 5/9 = ${celsius.toFixed(2)}°C`;
    }
}
