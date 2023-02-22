const $counter = document.querySelector("#hour");

const max = 9;

counter($counter, max);

function counter($counter, max) {
    let now = max;

    const handle = setInterval(() => {
        $counter.innerHTML = Math.ceil(max - now);

        // 목표에 도달하면 정리
        if (now < 1) {
            clearInterval(handle);
        }

        // 적용될 수치, 점점 줄어듬
        const step = now / 10;

        now -= step;
    }, 100); 
}

const $counter2 = document.querySelector("#hour2");

const max2 = 21;

counter2($counter2, max2);

function counter2($counter2, max2) {
    let now2 = max2;

    const handle2 = setInterval(() => {
        $counter2.innerHTML = Math.ceil(max2 - now2);

        // 목표에 도달하면 정리
        if (now2 < 1) {
            clearInterval(handle2);
        }

        // 적용될 수치, 점점 줄어듬
        const step2 = now2 / 10;

        now2 -= step2;
    }, 50); 
}