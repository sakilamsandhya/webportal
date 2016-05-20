<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClientReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         Schema::create('client_reports', function (Blueprint $table) {
            $table->increments('id');
            $table->string('report_name');
            $table->integer('client_id')->unsigned();
            $table->foreign('client_id')->references('id')->on('users');
            $table->string('month');
            $table->string('year');
            $table->timestamps();
        });
      
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       Schema::drop('client_reports');
    }
}
