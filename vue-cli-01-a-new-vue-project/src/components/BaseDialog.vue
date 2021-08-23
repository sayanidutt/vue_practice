<template>
        <div @click="$emit('close')"></div>
        <dialog open>
            <header>
                <slot>
                    <h2>{{ title }}</h2>
                </slot>
            </header>
            <section>
                <slot></slot>
            </section>
            <menu>
                <slot name="actions">
                    <button @click="$emit('close')">Close</button>
                </slot>
            </menu>
        </dialog>
</template>

<script>
export default {
    props: ['title'],
    emits: ['close']
}
</script>
