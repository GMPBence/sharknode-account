import { useEffect, useMemo, useRef, useState } from 'react';
import './slider.scss'

type Position = {
    
    x: number
    value: number

}

/* eslint-disable  @typescript-eslint/no-explicit-any */
const Slider = () => {
    const values = useMemo(() => [1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16], []);

    const track = useRef<HTMLDivElement>(null)
    const thumb = useRef<HTMLDivElement>(null)
    const tooltip = useRef<HTMLDivElement>(null)
    const ticksContainer = useRef<HTMLDivElement>(null)

    const [ stepPositions, setStepPositions ] = useState<Position[]>()
    const [ currentIndex, setCurrentIndex ] = useState<number>(0)

    const initialized = useRef<boolean>(false)

    useEffect(() => {
        if(initialized.current) {
            return
        }
        initialized.current = true
    
        values.forEach(val => {
            const tick = document.createElement('span');
            tick.textContent = `${val} GB`;
            ticksContainer.current!.appendChild(tick);
        });

        const sp = getStepPositions()
        setStepPositions(sp);
        setCurrentIndex(0)
        updateSlider(0, sp);

        thumb.current!.addEventListener('mousedown', (e) => {
            e.preventDefault();
            const onMouseMove = (event: any) => {
                const rect = track.current!.getBoundingClientRect();
                let x = event.clientX - rect.left;
                x = Math.max(0, Math.min(x, track.current!.offsetWidth));
                const index = getClosestStep(x, stepPositions!);

                if (index !== currentIndex) {
                    setCurrentIndex(index);
                    updateSlider(index, stepPositions!);
                }
            };

            const onMouseUp = () => {
                window.removeEventListener('mousemove', onMouseMove);
                window.removeEventListener('mouseup', onMouseUp);
            };

            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        });

        track.current!.addEventListener('click', (e) => {
            const rect = track.current!.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const index = getClosestStep(x, sp);
            setCurrentIndex(index);
            updateSlider(index, stepPositions!);
        });
    }, [ values, ticksContainer, track, thumb ])

    function getStepPositions(): Position[] {
        const stepCount = values.length - 1;
        const stepSize = track.current!.offsetWidth / stepCount;

        return values.map((_, i) => ({
            value: values[i],
            x: i * stepSize
        }));
    }

    function updateSlider(index: number, positions: Position[]) {
        const pos = positions[index];
        thumb.current!.style.left = `${pos.x}px`;
        tooltip.current!.style.left = `${pos.x}px`;
        tooltip.current!.textContent = `${pos.value} GB Ram`;
    }

    function getClosestStep(x: number, positions: Position[]) {
        let closest = 0;
        let minDist = Infinity;
        for (let i = 0; i < positions.length; i++) {
            const dist = Math.abs(positions[i].x - x);
            if (dist < minDist) {
                minDist = dist;
                closest = i;
            }
        }
        return closest;
    }

    window.addEventListener('resize', () => {
        setStepPositions(getStepPositions());
        updateSlider(currentIndex, stepPositions!);
    });

    return (
       <div className="slider">
            <div className="slider_tooltip" ref={ tooltip } id="tooltip">1 GB Ram</div>
            <div className="slider_track" ref={ track } id="track">
                <div className="slider_thumb" ref={ thumb } id="thumb"></div>
            </div>
            <div className="slider_ticks" ref={ ticksContainer } id="ticks"></div>
        </div>
    )
}

export default Slider