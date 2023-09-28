<script setup>

</script>

<template>
    <main>
        <section class="introduction">
            <div class="container">
                <div class="text">
                    <h1>Hi！I'm Xiao</h1>
                    <div class="aniText">
                        <h3>Frontend Developer</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat molestias quae similique
                        necessitatibus
                        nemo. Tenetur modi quibusdam voluptatibus unde aliquid, facilis officiis sunt consequatur ab,
                        tempora
                        facere possimus alias assumenda.</p>
                    <div class="email">
                        <h4>Email</h4>
                        <span>xiaobow2230@gmail.com</span>
                    </div>
                    <div class="socialBtn">
                        <a href="#" target="_blank"><button type="button" class="primary"><font-awesome-icon
                                    :icon="['fab', 'linkedin-in']" /></button></a>
                        <a href="#" target="_blank"><button type="button" class="primary"><font-awesome-icon
                                    :icon="['fab', 'facebook-f']" /></button></a>
                    </div>
                </div>
                <div class="img">
                    <img class="introBg" src="@/assets/img/introBg.png" alt="introBg" title="introBg">
                    <img class="intro" src="@/assets/img/intro.png" alt="intro" title="intro">
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.introduction .container {
    display: flex;

    >* {
        flex: 1 0 50%;

        &.text {
            display: flex;
            flex-direction: column;
            justify-content: center;

            h1 {
                font-weight: 700;
                font-size: 2rem;
            }

            .aniText {
                width: 15rem;

                h3 {
                    font-size: 1.5rem;
                    font-weight: 500;
                    white-space: nowrap;
                    color: transparent;
                    -webkit-text-stroke: 1px $secondaryColor;
                    background: linear-gradient($secondaryColor, $secondaryColor) no-repeat;
                    background-clip: text;
                    -webkit-background-clip: text;
                    background-position: 0 0;
                    position: relative;
                    animation: aniBg 3s linear infinite;

                    &::before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 0;
                        height: 100%;
                        border-right: 2px solid $secondaryColor;
                        animation: aniCursor 3s linear infinite;
                    }
                }
            }

            p {
                margin-block: 0.5rem;
                color: $fourthColor;
            }

            .email {
                h4 {
                    font-size: 1.1rem;
                    font-weight: 500;
                }

                span {
                    color: $fourthColor;
                }
            }

            .socialBtn {
                margin-block: 0.5rem;

                button {
                    font-size: 1.1rem;
                    color: $primaryColor;
                    background-color: $secondaryColor;
                    aspect-ratio: 1;
                    padding: 0.3rem;
                    margin: 0.2rem;
                }
            }
        }

        &.img {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: clamp(300px, 75%, 650px);
                border-radius: 50%;
                box-shadow: 0 0 30px 30px var(--primaryColor) inset;

                &.intro {
                    width: clamp(310px, 76%, 660px);
                    position: absolute;
                }
            }
        }
    }
}

@keyframes aniBg {

    0%,
    10%,
    100% {
        background-position: -15rem 0;
    }

    75%,
    90% {
        background-position: 0 0;
    }
}

@keyframes aniCursor {

    0%,
    10%,
    100% {
        width: 0;
    }

    75%,
    85%,
    90% {
        width: 100%;
        opacity: 1;
    }

    80% {
        opacity: 0;
    }
}

@media (max-width: 767.98px) {
    .introduction .container {
        flex-direction: column-reverse;

        .img {
            margin-bottom: 3rem;

            img {
                width: max(60%, 158px);

                &.intro {
                    width: max(61%, 168px);
                    ;
                }
            }
        }
    }
}
</style>