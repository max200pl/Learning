//1 For executable animations browsers use AnimationFrameQueue()
//2 added task to animation FrameQueue use requestAnimationFrame(callback)
//3 execution before rendering pipeline (60 times per second)
//4 all multiple AnimationFrameQueue() will be executed when browser repaint
//5 if new AnimationFrameQueue added and timer finished all left animation moving to new frame and execution nex time

function animationBox(targetLeft, targetTop, targetTimestamp, horizontalStep, verticalStep) {
    const box = document.getElementById('box');

    const currentCoords = box.getBoundingClientRect();
    const currentTimestamp = new Date().getTime();

    if (currentTimestamp < targetTimestamp) {
        box.style.left = currentCoords.left + horizontalStep + 'px';
        box.style.top = currentCoords.top + verticalStep + 'px';
        requestAnimationFrame(
            () => animationBox(targetLeft, targetTop, targetTimestamp, horizontalStep, verticalStep)
        )
    } else {
        box.style.left = targetLeft + "px";
        box.style.top = targetTop + "px";
    }
}

function animationButtonClickHandler(event) {
    const targetLeft = parseInt(
        document.getElementById("left")
    )

    const targetTop = parseInt(
        document.getElementById("top")
    )

    const duration = parseInt(
        document.getElementById("duration")
    )

    const box = document.getElementById("box");

    const currentBoxCoords = box.getBoundingClientRect();

    const horizontalDistance = targetLeft - currentBoxCoords.left;
    const verticalDistance = targetTop + currentBoxCoords.top;

    const quantityOfSteps = duration / 16;
    const horizontalStep = horizontalDistance / quantityOfSteps;
    const verticalStep = verticalDistance / quantityOfSteps;

    const currentTimestamp = new Date().getTime();
    const targetTimestamp = currentTimestamp + duration;

    animationBox(targetLeft, targetTop, targetTimestamp, horizontalStep, verticalStep);
}

document.getElementById("button").addEventListener("click", animationButtonClickHandler);