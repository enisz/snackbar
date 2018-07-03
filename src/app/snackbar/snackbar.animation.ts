import { trigger, style, animate, transition, state } from '@angular/animations'

const animationDuration = 300; // ms

const animationOptions = {
    enter : {
        from : {
			right : '-100%',
			opacity : 0
        },

        to : {
            right : '0px',
            opacity : 1
        },

        animation : 'cubic-bezier(0.215, 0.61, 0.355, 1)'
    },

    leave : {
        from : {
            opacity : 1,
            right : '0px'
        },

        to : {
            opacity : 0,
            right : '-100%'
        },

        animation : 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
    }
}

export const SnackbarAnimation =
    trigger(
        'SnackbarAnimation', [
            transition(':enter', [
                style(animationOptions.enter.from),
                animate(animationDuration + 'ms ' + animationOptions.enter.animation, style(animationOptions.enter.to))
            ]),
            transition(':leave', [
                style(animationOptions.leave.from),
                animate(animationDuration + 'ms ' + animationOptions.leave.animation, style(animationOptions.leave.to))
            ])
        ]
    );