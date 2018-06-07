<?php

class index extends page_base {

    public function build(output $output) {
        $app_name       = cst_infrastructure::app_name;
        $default_layout = sprintf('%s/index.html', __DIR__);
        $template       = file_get_contents($default_layout);
        $replace        = array(
            '%mtime_src_js%'  => $this->modified_time($app_name . '.mserrano.js'),
            '%mtime_src_css%' => $this->modified_time($app_name . '.mserrano.css'),
        );

        $this->response = str_replace(
                array_keys($replace), array_values($replace), $template
        );
        $output->format($this->response, output::html);
    }

    private function fullpath($file) {
        return sprintf('%s/%s', __DIR__, $file);
    }

    private function modified_time($file) {
        $public_path = sprintf('../public/%s', $file);
        return filemtime($this->fullpath($public_path));
    }

}
