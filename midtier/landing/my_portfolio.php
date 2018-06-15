<?php

class my_portfolio extends page_base {

    use page_sanitizer;

    public function __destruct() {
        $this->destruct_page_sanitizer();
    }

    public function build(output $output) {
        $options = new sanitizer_config();
        $options->register_set('post', $this->post, cst_sanitizer::type_json);

        $this->_build_sanitizer($output, $options);
    }

    public function build_sanitizer(output $output) {
        $this->sanitizer->queue_item('post', cst_portfolio::p_has_access, cst_sanitizer::sane_boolean);
        $continue = $this->sanitizer->run_it();

        if ($continue === true) {
            $has_access   = $this->sanitizer->get('post', cst_portfolio::p_has_access);
            $project_info = $this->retrieve_projects($has_access);
        }

        if ($continue === true) {
            $this->response[cst_portfolio::p_project_info] = $project_info;
            $this->set_response_pass();
        }
        $output->format($this->response, output::angular);
    }

    // --- helpers ---
    private function retrieve_projects(bool $has_access): array {
        $return = array();
        if ($has_access === true) {
            $return = array(
                array(
                    cst_portfolio::p_key          => cst_portfolio::key_cygnus,
                    cst_portfolio::p_organization => cst_portfolio::org_volunteer,
                    cst_portfolio::p_url          => 'https://cygnusmgmt-production.herokuapp.com',
                    cst_portfolio::p_github       => 'https://github.com/mmserran/cygnusmgmt',
                    cst_portfolio::p_is_private   => false,
                    cst_portfolio::p_has_demo     => true,
                ),
                array(
                    cst_portfolio::p_key          => cst_portfolio::key_hpl_com,
                    cst_portfolio::p_organization => cst_portfolio::org_hpulse,
                    cst_portfolio::p_url          => 'https://www.hospitalitypulse.net',
                    cst_portfolio::p_note         => 'May no longer be used',
                    cst_portfolio::p_github       => cst_portfolio::p_not_avail,
                    cst_portfolio::p_is_private   => false,
                    cst_portfolio::p_has_demo     => true,
                ),
                array(
                    cst_portfolio::p_key          => cst_portfolio::key_pulsemobile,
                    cst_portfolio::p_organization => cst_portfolio::org_hpulse,
                    cst_portfolio::p_url          => 'https://mp.hospitalitypulse.net',
                    cst_portfolio::p_note         => 'Intended for Mobile Devices only',
                    cst_portfolio::p_github       => cst_portfolio::p_not_avail,
                    cst_portfolio::p_is_private   => false,
                    cst_portfolio::p_has_demo     => true,
                ),
                array(
                    cst_portfolio::p_key          => cst_portfolio::key_internalc,
                    cst_portfolio::p_organization => cst_portfolio::org_hpulse,
                    cst_portfolio::p_url          => 'https://ic.hospitalitypulse.net',
                    cst_portfolio::p_note         => 'Just the login page is public',
                    cst_portfolio::p_github       => cst_portfolio::p_not_avail,
                    cst_portfolio::p_is_private   => true,
                    cst_portfolio::p_has_demo     => true,
                ),
                array(
                    cst_portfolio::p_key          => cst_portfolio::key_pulsebooker,
                    cst_portfolio::p_organization => cst_portfolio::org_hpulse,
                    cst_portfolio::p_url          => 'https://rauf.hospitalitypulse.net/#/pulsebooker',
                    cst_portfolio::p_note         => 'Also check out /#/pulsebooker2',
                    cst_portfolio::p_github       => cst_portfolio::p_not_avail,
                    cst_portfolio::p_is_private   => false,
                    cst_portfolio::p_has_demo     => true,
                ),
                array(
                    cst_portfolio::p_key          => cst_portfolio::key_pulselink,
                    cst_portfolio::p_organization => cst_portfolio::org_hpulse,
                    cst_portfolio::p_url          => cst_portfolio::p_not_avail,
                    cst_portfolio::p_github       => cst_portfolio::p_not_avail,
                    cst_portfolio::p_is_private   => true,
                    cst_portfolio::p_has_demo     => false,
                ),
                array(
                    cst_portfolio::p_key          => cst_portfolio::key_pulsebooker_cro,
                    cst_portfolio::p_organization => cst_portfolio::org_hpulse,
                    cst_portfolio::p_url          => 'https://rauf.hospitalitypulse.net/#/ITB-2018',
                    cst_portfolio::p_note         => 'Use property Opera 504 Lab',
                    cst_portfolio::p_github       => cst_portfolio::p_not_avail,
                    cst_portfolio::p_is_private   => false,
                    cst_portfolio::p_has_demo     => true,
                ),
                array(
                    cst_portfolio::p_key          => cst_portfolio::key_lab,
                    cst_portfolio::p_organization => cst_portfolio::org_mserrano,
                    cst_portfolio::p_url          => 'http://lab.mserrano.net',
                    cst_portfolio::p_github       => 'https://github.com/mserrano-dev/LAB-MSERRANO',
                    cst_portfolio::p_is_private   => false,
                    cst_portfolio::p_has_demo     => true,
                ),
                array(
                    cst_portfolio::p_key          => cst_portfolio::key_devops,
                    cst_portfolio::p_organization => cst_portfolio::org_mserrano,
                    cst_portfolio::p_url          => cst_portfolio::p_not_avail,
                    cst_portfolio::p_github       => 'https://github.com/mserrano-dev/DevOps',
                    cst_portfolio::p_is_private   => false,
                    cst_portfolio::p_has_demo     => false,
                    cst_portfolio::p_not_avail    => true,
                ),
                array(
                    cst_portfolio::p_key          => cst_portfolio::key_www,
                    cst_portfolio::p_organization => cst_portfolio::org_mserrano,
                    cst_portfolio::p_url          => 'http://www.mserrano.net',
                    cst_portfolio::p_github       => 'https://github.com/mserrano-dev/WWW-MSERRANO',
                    cst_portfolio::p_is_private   => false,
                    cst_portfolio::p_has_demo     => false,
                    cst_portfolio::p_not_avail    => true,
                ),
                array(
                    cst_portfolio::p_key          => cst_portfolio::key_docs,
                    cst_portfolio::p_organization => cst_portfolio::org_mserrano,
                    cst_portfolio::p_url          => 'http://docs.mserrano.net',
                    cst_portfolio::p_github       => 'https://github.com/mserrano-dev/DOCS-MSERRANO',
                    cst_portfolio::p_is_private   => false,
                    cst_portfolio::p_has_demo     => false,
                    cst_portfolio::p_not_avail    => true,
                ),
            );
        }
        return $return;
    }

}
