<?php

trait page_sanitizer {

    protected $sanitizer;

    public function destruct_page_sanitizer() {
        $this->sanitizer = null;
    }

    public function _build_sanitizer(output $output, sanitizer_config $options) {
        $this->sanitizer = new sanitizer_manager($options);

        $this->build_sanitizer($output);
    }

    abstract public function build_sanitizer(output $output);
}
