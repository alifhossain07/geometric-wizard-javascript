function getInputValue(fieldID)
{
    const inputID = document.getElementById(fieldID);
    const inputValueText = inputID.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function calculateTriangleArea()
{
    const triangleBaseValue = getInputValue("triangle-base");
    const triangleWidthValue =getInputValue("triangle-width");

    const triangleArea = 0.5 * triangleBaseValue * triangleWidthValue;
    
    const spanArea = document.getElementById("triangle-area");
    spanArea.innerText = triangleArea;
}
function calculateRectangleArea()
{
    const rectangleWidthValue = getInputValue("rectangle-width");
    const rectangleHeightValue =getInputValue("rectangle-height");

    const rectangleArea = rectangleWidthValue * rectangleHeightValue;
    
    const spanArea = document.getElementById("rectangle-area");
    spanArea.innerText = rectangleArea;
}
function calculateParallelogramArea()
{
    const paraBaseValue = getInputValue("para-base");
    const paraHeightValue =getInputValue("para-height");

    const paraArea = paraBaseValue * paraHeightValue;
    
    const spanArea = document.getElementById("para-area");
    spanArea.innerText = paraArea;
}